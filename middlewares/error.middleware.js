//HATALAR DAHA AÇIKLAYICI OLSUN DİYE BELLİ BAŞLILARINA DESCRIPTION EKLEDİK

const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };

        error.message = err.message;

        console.log(err);

        // Mongoose bad ObjectId error
        if (err.name === "CastError") {
            const message = `Resource not found with id of ${err.value}`;
            error = new Error(message);
            error.statusCode = 404;
        }   

        // Mongoose duplicate key error
        if (err.code === 11000) {
            const message = "Duplicate field value entered";
            error = new Error(message);
            error.statusCode = 400; 
        }
        
        // Mongoose validation error
        if (err.name === "ValidationError") {
            const message = Object.values(err.errors).map((val) => val.message);
            error = new Error(message);
            error.statusCode = 400;
        } 
    } catch (error) {
        next(error);    
    };
}


export default errorMiddleware;