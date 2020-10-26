namespace Repository.Helpers
{
    public static class STORE_PROCEDURES
    {
        // CRUD Editoriales
        public static string GET_EDITORIALS = "data.get_Editorials";
        public static string SET_EDITORIALS = "data.set_Editorials";
        public static string PUT_EDITORIALS = "data.put_Editorials";
        public static string DELETE_EDITORIALS = "data.delete_Editorials";

        // CRUD Libros
        public static string GET_LIBRARYS = "data.get_Librarys";
        public static string SET_LIBRARYS = "data.set_Librarys";
        public static string PUT_LIBRARYS = "data.put_Librarys";
        public static string DELETE_LIBRARYS = "data.delete_Librarys";

        // TOKEN
        public static string GET_LOGIN = "identity.get_Login";

    }
}
