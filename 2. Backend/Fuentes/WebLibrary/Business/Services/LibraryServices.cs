using Business.Interfaces;
using Entity.Dtos;
using Entity.Mappers;
using Repository.Interfaces;
using System.Collections.Generic;

namespace Business.Services
{
    public class LibraryServices : ILibraryServices
    {
        ILibraryRepository _repository;
        public LibraryServices(ILibraryRepository repository)
        {
            _repository = repository;
        }

        // CONTROL EDITORIALES
        public List<EditorialsDto> getEditorials() => _repository.getEditorials().AsLstEditorials();
        public ResultDto setEditorials(EditorialsDto dto) => _repository.setEditorials(dto).AsResult();
        public ResultDto putEditorials(EditorialsDto dto, int id) => _repository.putEditorials(dto, id).AsResult();
        public ResultDto deleteEditorials(int id) => _repository.deleteEditorials(id).AsResult();

        // CONTROL LIBROS
        public List<LibrarysDto> getLibrarys() => _repository.getLibrarys().AsLstLibrarys();
        public ResultDto setLibrarys(LibrarysDto dto) => _repository.setLibrarys(dto).AsResult();
        public ResultDto putLibrarys(LibrarysDto dto, int id) => _repository.putLibrarys(dto, id).AsResult();
        public ResultDto deleteLibrarys(int id) => _repository.deleteLibrarys(id).AsResult();
    }
}
