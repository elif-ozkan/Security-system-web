using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    public class AssignmentService
    {
        private readonly AssignmentRepository _assignmentRepository;

        public AssignmentService(AssignmentRepository assignmentRepository)
        {
            _assignmentRepository = assignmentRepository;
        }
        //Tüm assigmentları getir

        public async Task<List<Assignments>> GetAllAssignmentsAsync()
        {
            // Veritabanından tüm assignments'ı al
            var assignments = await _assignmentRepository.GetAllAssignmentsAsync();

            // Listeyi dönüştür
            return assignments.ToList(); // Dönüştürme işlemi
        }
        //Assigmentları ID ye göre getir
        public async Task GetAllAssigmentsById(int id)
        {
            await _assignmentRepository.GetAssignmentsByIdAsync(id);
        }
        //Assigment ekle
        public async Task<Assignments> AddAssigments(Assignments assignments)
        {
            await _assignmentRepository.AddAssignmentAsync(assignments);
            return assignments;
        }
        //Assigment güncelle
        public async Task<Assignments> UpdateAssigments(Assignments assignments)
        {
            if(assignments == null)
            {
                throw new ArgumentNullException(nameof(assignments));
            }
            await _assignmentRepository.UpdateAssignmentAsync(assignments);
            return assignments;
        }
        //Assigment sil
        public async Task DeleteAssigmentAsync(int id)
        {
            await _assignmentRepository.DeleteAssignmentAsync(id);

        }
    }


}
