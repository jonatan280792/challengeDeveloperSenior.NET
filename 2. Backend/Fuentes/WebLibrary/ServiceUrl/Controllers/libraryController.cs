using Business.Interfaces;
using Entity.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class libraryController : ControllerBase
    {
        ILibraryServices _service;

        public libraryController(ILibraryServices Service)
        {
            _service = Service;
        }

        // Metodo GET que obtiene todas las editoriales
        [HttpGet]
        [Route("getEditorials")]
        public IEnumerable<EditorialsDto> getEditorials()
        {
            return _service.getEditorials();
        }

        // Metodo GET que obtiene todas las editoriales
        [HttpPost]
        //[Authorize]
        [Route("setEditorials")]
        public ResultDto setEditorials([FromBody] EditorialsDto dto)
        {
            return _service.setEditorials(dto);
        }

        // Metodo PUT que actualiza una editorial
        [HttpPut]
        // [Authorize]
        [Route("putEditorials")]
        public ResultDto putEditorials([FromBody] EditorialsDto dto, int id)
        {
            return _service.putEditorials(dto, id);
        }

        // Metodo DELETE que elimina una editorial
        [HttpDelete]
        // [Authorize]
        [Route("deleteEditorials")]
        public ResultDto deleteEditorials(int id)
        {
            return _service.deleteEditorials(id);
        }

        // Metodo GET que obtiene todos los libros
        [HttpGet]
        [Route("getLibrarys")]
        public IEnumerable<LibrarysDto> getLibrarys()
        {
            return _service.getLibrarys();
        }

        // Metodo POST que se encarga de crear un nuevo libro
        [HttpPost]
        // [Authorize]
        [Route("setLibrarys")]
        public ResultDto setLibrarys([FromBody] LibrarysDto dto)
        {
            return _service.setLibrarys(dto);
        }

        // Metodo PUT que se encarga de Actualizar un libro
        [HttpPut]
        // [Authorize]
        [Route("putLibrarys")]
        public ResultDto putLibrarys([FromBody] LibrarysDto dto, int id)
        {
            return _service.putLibrarys(dto, id);
        }

        // Metodo DELETE que elimina una editorial
        [HttpDelete]
        // [Authorize]
        [Route("deleteLibrarys")]
        public ResultDto deleteLibrarys(int id)
        {
            return _service.deleteLibrarys(id);
        }

        // GET: api/<libraryController>
        [HttpGet]
        public string Get()
        {
            return "El controlador sirve";
        }
    }
}
