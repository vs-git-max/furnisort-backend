const logout = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
    console.log(error.message);
  }
};

export default logout;
