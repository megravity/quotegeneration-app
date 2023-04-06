const errorHandler = (error, req, res, next) => {
    console.log("Error Handler:");
    res.status(error.status || 500).json({
        success: false,
        message: err.message,
    });
};
