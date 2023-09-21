using System.Collections.Generic;
using MobileBackend.Dtos;
using MobileBackend.Models;

namespace MobileBackend.Services.IServices
{
    public interface IBookService
    {
        IList<Book> GetAll();
        Book GetById(int id);
        Book Create(Book bookInput);
        Book Update(Book bookInput);
        bool Delete(int id);
        List<Book> Search(string keyword);
    }
}