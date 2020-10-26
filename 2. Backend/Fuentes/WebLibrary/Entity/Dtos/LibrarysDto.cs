using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Dtos
{
    public class LibrarysDto
    {
        public int id { get; set; }
        public int isbn { get; set; }
        public int id_editorial { get; set; }
        public string editorial { get; set; }
        public string title { get; set; }
        public string synopsis { get; set; }
        public int n_pages { get; set; }
    }
}
