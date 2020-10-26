using Entity.Dtos;
using Entity.Mappers;
using Microsoft.Extensions.Configuration;
using Repository.Helpers;
using Repository.Interfaces;
using Security.Services;
using System;
using System.Data;
using System.Data.SqlClient;

namespace Repository.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        ResultDto resultDto = new ResultDto();
        TokenServices _tokenService = new TokenServices();
        readonly IConfiguration _config;
        DBContext dbContext = new DBContext();
        TokenJwt token = new TokenJwt();
        
        DataTable tblResult;
        SqlConnection con;

        public UsersRepository(IConfiguration config)
        {
            _config = config;
        }

        public TokenJwt Login(string userName, string passWord)
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.GET_LOGIN, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@userName", SqlDbType.VarChar).Value = userName;
                        cmd.SelectCommand.Parameters.Add("@passWord", SqlDbType.VarChar).Value = passWord;
                        cmd.SelectCommand.Parameters.Add("@status", SqlDbType.Bit).Value = true;
                        cmd.Fill(tblResult);

                        resultDto = tblResult.AsResult();
                        if(resultDto.Transaction == 1)
                        {
                            token.status = "Ok";
                            token.token = _tokenService.generateTokenJwt(_config, userName);
                        } else
                        {
                            token.status = "Error";
                            token.token = resultDto.Message;
                        }

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return token;
            }
        }

    }
}
