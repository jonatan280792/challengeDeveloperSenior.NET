using Entity.Dtos;
using FluentAssertions;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace UnitTest
{
    public class libraryTest
    {
        [Fact]
        public async Task getAll()
        {
            var client = new testClientProvider().client;

            var response = await client.GetAsync("api/library/getLibrarys");

            response.EnsureSuccessStatusCode();

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        public async Task TestPost()
        {
            using (var client = new testClientProvider().client)
            {
                var response = await client.PostAsync("api/library/setLibrarys", new StringContent(
                    JsonConvert.SerializeObject(new LibrarysDto() { isbn = 1, id_editorial = 2, title = "Prueba", n_pages = 40, synopsis = "Este es un ejemplo de sinopsis" } ), Encoding.UTF8, "aplication/json"));

                response.EnsureSuccessStatusCode();

                response.StatusCode.Should().Be(HttpStatusCode.OK);
            }
        }
    }
}
