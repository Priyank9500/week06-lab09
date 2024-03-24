const Order = require("./model");

// get all Orders
const getorders = async (req, res) => {
  const orders = await order.find({});
  res.status(200).json(order);
};

// Add one Order
const addOrder = async (req, res) => {
    const { customer, totalAmount, duration, products, status } = req.body;
  
    const newOrder = new Order({ customer, totalAmount, duration, products, status });
    await newOrder.save();
    res.status(201).json(newOrder);
  };
  
  // Get Order by ID
const getOrder = async (req, res) => {
    const { id } = req.params;
  
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    res.status(200).json(goal);
  };

  // Delete Order by ID
const deleteOrder = async (req, res) => {
    const { id } = req.params;
  
    const order = await Order.findByIdAndDelete({ _id: id });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  };

  // Delete All Orders
const deleteallOrders = async (req, res) => {
    const result = await Order.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} orders successfully` });
  };
  
  // Update Order by ID
const updateOrder = async (req, res) => {
    const { id } = req.params;
    const updatedGoal = req.body;
    const order = await Order.findOneAndUpdate({ _id: id }, updatedGoal);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(goal);
  };

  module.exports = {
    getorders,
    addOrder,
    getOrder,
    deleteOrder,
    deleteallOrders,
    updateOrder,
  };
  