using Entity.Dtos;
using System;
using System.Collections.Generic;
using System.Data;

namespace Entity.Mappers
{
    public static class LibraryMapper
    {
        // MAPEA LOS CAMPOS DE LA TABLA EDITORIALES
        public static List<EditorialsDto> AsLstEditorials(this DataTable table)
        {
            List<EditorialsDto> lst = new List<EditorialsDto>();

            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    lst.Add(new EditorialsDto()
                    {
                        id = Convert.ToInt32(row["id"].ToString()),
                        name = row["nombre"].ToString(),
                        campus = row["sede"].ToString(),
                        status = Convert.ToBoolean(row["estado"].ToString())
                    });
                }
            }

            return lst;
        }

        // MAPEA LOS CAMPOS DE LA TABLA LIBROS
        public static List<LibrarysDto> AsLstLibrarys(this DataTable table)
        {
            List<LibrarysDto> lst = new List<LibrarysDto>();

            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    lst.Add(new LibrarysDto()
                    {
                        id = Convert.ToInt32(row["id"].ToString()),
                        isbn = Convert.ToInt32(row["isbn"].ToString()),
                        id_editorial = Convert.ToInt32(row["id_editorial"].ToString()),
                        editorial = row["editorial"].ToString(),
                        title = row["titulo"].ToString(),
                        synopsis = row["sinopsis"].ToString(),
                        n_pages = Convert.ToInt32(row["n_paginas"].ToString())
                    });
                }
            }

            return lst;
        }
    }
}
