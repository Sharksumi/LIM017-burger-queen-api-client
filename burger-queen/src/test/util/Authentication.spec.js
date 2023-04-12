import axios from 'axios';
import {authentication} from '../../util/Authentication.js'

jest.mock('axios');

describe('authentication',() =>{
    test('should auth successful when  the status: 200 ',() =>{
      const objStatus = {
          status:200, 
          data: {accessToken:"mesero1",
                  user: {
                    email: "anita.borg@systers.xyz",
                    roles: { admin:true},
                    id: 1 }
                }
      }
        const userRole= "true";
        const idUser = " 1";

      const emailAuth ="anita.borg@systers.xyz";
      const passwordAuth = "123456"; 
      axios.post.mockResolvedValue(objStatus)
      // axios.post.mockResolvedValue(objUser)
      return authentication(emailAuth,passwordAuth)
       .then((res)=>{
        expect((res)).toBe("mesero1")
        // expect((res)).toBe(userRole),
        // expect((res)).toBe(idUser)
       })
        
    // })
    })


    test('should show not successful when the status: 400', () =>{
      const emailAuthErr ="alfito@burger.com";
      const passwordAuthErr = "1234567";
      const objStatus = {
        status:400, 
        data: {error: 'No autorizado'}
    } 
      const respErro = {error: 'No autorizado'}
      axios.post.mockResolvedValue(objStatus)
      return authentication(emailAuthErr,passwordAuthErr)
       .catch((err)=>{
        expect((err)).toStrictEqual(respErro)
       }) 
    

    })

  test('should show Error',() =>{
 
  const urlError=  "http://localhost:3001/auth1";
  const emailAuthErr ="alfito@burger.com";
  const passwordAuthErr = "1234567";
  // const respErro = {error: 'No autorizado'}
  // const tokenTest = 400;
    axios.post.mockRejectedValue(null)
    return authentication(emailAuthErr,passwordAuthErr)
     .catch((err)=>{
      expect((err)).toBe(null)
     }) 
  
  })
})