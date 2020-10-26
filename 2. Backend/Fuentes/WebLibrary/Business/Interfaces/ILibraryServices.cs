using Entity.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Interfaces
{
    public interface ILibraryServices
    {
        // Control editoriales
        List<EditorialsDto> getEditorials();
        ResultDto setEditorials(EditorialsDto dto);
        ResultDto putEditorials(EditorialsDto dto, int id);
        ResultDto deleteEditorials(int id);

        // Control Libros
        List<LibrarysDto> getLibrarys();
        ResultDto setLibrarys(LibrarysDto dto);
        ResultDto putLibrarys(LibrarysDto dto, int id);
        ResultDto deleteLibrarys(int id);
    }
}
