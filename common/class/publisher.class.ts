import api from "../api"

class publisher {
    getPubisherEarnings = async(pubisherId:string)=>{
        try {
            let response: any;
            response = await api.get(`publisher/get-earings${pubisherId}`);
            if (response?.data?.success) {
              return response?.data?.data;
            } else {
              throw new Error("something went wrong");
            }
          } catch (err) {
            throw err;
          }
    }
}

const publisherClass = new publisher();
export default publisherClass;