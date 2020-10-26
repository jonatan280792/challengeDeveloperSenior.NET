using Entity.Dtos;
using System.Data;

namespace Repository.Interfaces
{
    public interface ILibraryRepository
    {
        // CONTROL EDITORIALES CRUD
        DataTable getEditorials();
        DataTable setEditorials(EditorialsDto dto);
        DataTable putEditorials(EditorialsDto dto, int id);
        DataTable deleteEditorials(int id);

        // CONTROL LIBROS CRUD
        DataTable getLibrarys();
        DataTable setLibrarys(LibrarysDto dto);
        DataTable putLibrarys(LibrarysDto dto, int id);
        DataTable deleteLibrarys(int id);
    }
}
