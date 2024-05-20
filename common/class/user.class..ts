import api from "../api";

interface UPDATEUSERDATA {
    fullname?: string;
    email?: string;
    phone?:string;
    image?:string
}
enum Country {
    Nigeria = "Nigeria",
    Cameroon = "Cameroon"
}
enum Duration {
    Termly = "Termly",
    BiAnnualy = "BiAnnualy",
    Annualy = "Annualy"

}

interface SUBSCRIPTION {
    country: Country;
    duration: Duration;
    planDurationMonth:string;
    planDurationDays:string;
    subscriptionFee:number
}

interface UPDATEUSERPASSWORD {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
class user{
    //get profile details
    getProfile = async()=>{
        try {
            let response: any;
            response = await api.get(`user/get-profile`);
            if (response?.data?.success) {
              return response?.data?.data;
            } else {
              throw new Error("something went wrong");
            }
          } catch (err) {
            throw err;
          }
    }
    updateProfile = async(data: UPDATEUSERDATA)=>{
        try {
            let response: any;
            response = await api.patch(`user/update-profile`,data);
            if (response?.data?.success) {
              return response?.data?.data;
            } else {
              throw new Error("something went wrong");
            }
          } catch (err) {
            throw err;
          }
    }
    changePassword = async(data:UPDATEUSERPASSWORD)=>{
        try{
            let response: any;
            response = await api.patch(`user/update-password`,data);
            if (response?.data?.success) {
              return response?.data?.data;
            } else {
              throw new Error("something went wrong");
            }
        }catch (err){
            throw err
        }
    }
    subscription = async(data:SUBSCRIPTION )=>{
        try{
            let response: any;
            response = await api.post(`user/subscribe`,data);
            if (response?.data?.success) {
              return response?.data?.data;
            } else {
              throw new Error("something went wrong");
            }
        }catch (err){
            throw err
        }
    }
    
}


const userClass = new user();
export default userClass;