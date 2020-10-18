
import keys from '../config/keys';
import axios from 'axios';

export default class PostCurdService {
    
    constructor() {
    }

    async create(data){
      try{
        var result= await axios.post(keys.url+'/posts', data);
        return result;
      }catch(error) {
        console.log("error", error);
      }
    }
    

    async update(id,data){

      try{
        var result= await axios.put(keys.url+'/posts/'+id,data);
        return result;
      }catch(error) {
        console.log("error", error);
      }
    }

    async read(){

      try{
        var result= await axios.get(keys.url+'/posts');
        // console.log(result.data);
        return result;
      }catch(error) {
        console.log("error", error);
      }
    }

    async readChart(){

      try{
        var result= await axios.get('https://reqres.in/api/posts/');
        // console.log(result.data);
        return result;
      }catch(error) {
        console.log("error", error);
      }
    }



    async readById(id){

      try{
        var result= await axios.get(keys.url+'/posts/'+id);
        return result;
      }catch(error) {
        console.log("error", error);
      }
    }

    async delete(id){

      try{
        var result= await axios.delete(keys.url+'/posts/'+id);
        return result;
      }catch(error) {
        console.log("error", error);
      }
    }
  
  }