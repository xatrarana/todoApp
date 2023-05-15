/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
class Service{
    constructor() {
        this.baseUrl = 'http://localhost:4545/api/v1';
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
        });
    }
    async createPost(title, value,date) {
        try {
          const response = await this.axiosInstance.post('/create', { title, value, date}, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          // Handle the response
          console.log(response.data);
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
      }

      async getPosts(){
        try {
            const response = await this.axiosInstance.get('/');
            return response;
        } catch (e) {
            console.log(e);
        }
      }

      async deletePost(id){
        console.log(id)
        try {
            const response = await this.axiosInstance.delete(`/delete/${id}`);
        } catch (e) {
            console.log(e);
        }
      }

      async updatePost(id,title,value){
        try {
            const res = await this.axiosInstance.put(`/update/${id}`,{title,value})
        } catch (e) {
            console.log(e);
        }
      }
}

export default Service;


const api = new Service();
// const request = api.createPost("hello","fucker");
// const request = api.getPosts();
