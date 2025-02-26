const Position = require("../../models/Position");

const config = require("../../configs/app");
const {
  ErrorBadRequest,
  ErrorNotFound,
  ErrorUnauthorized,
} = require("../../configs/errorMethods");

const methods = {
  scopeSearch(req) {
    $or = [];
    if (req.query.username)
      $or.push({ username: { $regex: req.query.username } });
    if (req.query.email) $or.push({ email: { $regex: req.query.email } });
    if (req.query.age) $or.push({ age: +req.query.age });
    const query = $or.length > 0 ? { $or } : {};
    const sort = { createdAt: -1 };
    if (req.query.orderByField && req.query.orderBy)
      sort[req.query.orderByField] =
        req.query.orderBy.toLowerCase() == "desc" ? -1 : 1;
    return { query: query, sort: sort };
  },

  async find(req) {
    const limit = +(req.query.size || config.pageLimit);
    const offset = +(limit * ((req.query.page || 1) - 1));
    const _q = methods.scopeSearch(req);

    try {
      const rows = await Position.find(_q.query)
        .sort({ sort: 1 })
        // .populate("userId")
        .exec(); // Populate the userId field with User document
      // .limit(limit)
      // .skip(offset);
      const count = await Position.countDocuments(_q.query);
      return {
        total: count,
        lastPage: Math.ceil(count / limit),
        currPage: +req.query.page || 1,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async findById(id) {
    try {
      const obj = await Position.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound("id: not found"));
    }
  },

  async insert(data) {
    try {
      const obj = new Position(data.body);
      const inserted = await obj.save();
      return inserted;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async update(id, data) {
    try {
      const obj = await Position.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Position.updateOne({ _id: id }, data);
      return Object.assign(obj, data);
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async delete(id) {
    try {
      const obj = await Position.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Position.deleteOne({ _id: id });
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
