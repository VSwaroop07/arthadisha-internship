using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArthaDisha_Training_C_
{
    internal class Task4
    {
        //DTO = DATA TRANSFER OBJECT
        public class UserResponseDto0
        {
            public string Name { get; set; }
            public string Email { get; set; }
        }

        //Request DTO (incoming data)
        public class CreateUserRequestDto
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

        //Response DTO (outgoing data)
        public class UserResponseDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
        }


        /*//Mapping (Manual Way)
        var userDto = new UserResponseDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email
        };*/


        //Validation with Data Annotations
        public class ValidationCreateUserRequestDto
        {
            [Required]
            [MaxLength(50)]
            public string Name { get; set; }

            [Required]
            [EmailAddress]
            public string Email { get; set; }

            [Required]
            [MinLength(6)]
            public string Password { get; set; }
        }



    }
}
