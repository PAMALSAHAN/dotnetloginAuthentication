using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApi.model;

namespace WebApi.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase {
        
        private  SignInManager<ApplicationUser> _signInManager;
        private  UserManager<ApplicationUser> _userManager;
        public ApplicationUserController (UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager) {
            this._userManager = userManager;
            this._signInManager = signInManager;

        }



        [HttpPost]
        [Route("Register")]
        //http://localhost:5000/api/ApplicationUser/Register
        
        public async Task<Object> PostApplicationUser (ApplicationUserModel applicationUserModel)
        {
            //applicationUserModel eka identity table ekata add karaganna one hinda applicationUer
            //eken instance ekak hadala ekata applicationUserModel eke hadapuwa pass karanawa. 
            var applicationUser=new ApplicationUser(){
                //identiy user eken hadanne eke inherit wenawane Identity user wa eke fieild tinawa 
                //ewata eliyen ganna apita one field tika hadaganna eka thama karanne.
                UserName=applicationUserModel.UserName,
                Email=applicationUserModel.Email,
                FullName=applicationUserModel.FullName
            };
            //dan hadagaththa eka _userManager ekata pass karanna one
            try
            {
                var result=await _userManager.CreateAsync(applicationUser,applicationUserModel.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }


    }
}