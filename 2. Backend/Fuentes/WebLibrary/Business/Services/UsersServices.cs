using Business.Interfaces;
using Repository.Interfaces;
using Entity.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Entity.Mappers;
using Security.Services;
using Microsoft.Extensions.Configuration;

namespace Business.Services
{
    public class UsersServices : IUsersServices
    {
        TokenJwt tokenJwt = new TokenJwt();
        IUsersRepository _repository;
        public UsersServices(IUsersRepository repository)
        {
            _repository = repository;
        }

        public TokenJwt Login(string userName, string passWord)
        {
            return tokenJwt = _repository.Login(userName, passWord);
        }
    }
}
