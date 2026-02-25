export const deliveryCharges = {
    "Colombo": 0,
    "Gampaha": 150,
    "Kalutara": 200,
    "Kandy": 300,
    "Galle": 350,
    "Matara": 400,
    "Jaffna": 500,
    "Other": 450
};

export const calculateDelivery = (district) => {
    return deliveryCharges[district] !== undefined ? deliveryCharges[district] : deliveryCharges["Other"];
};

export const districts = Object.keys(deliveryCharges).filter(d => d !== "Other");
