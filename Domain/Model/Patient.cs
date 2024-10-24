using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Patient
    {
        [Key]
        public Guid Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string Gender { get; set; }
        public required DateTime Dob { get; set; }
        public required string MaritalStatus { get; set; }
        public required string BloodGroup { get; set; }
        public required string PhoneNumber { get; set; }
        public string? Email { get; set; }
        public required string AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public required string Country { get; set; }
        public required string State { get; set; }
        public required string City { get; set; }
        public required string PastMedicalHistory { get; set; }
        public required string CurrentIllness { get; set; }
        public required string TreatedBy { get; set; }
        public required string TreatmentStatus { get; set; }
        public string? InsuranceName { get; set; }
        public string? InsuranceId { get; set; }
        public required string Coverage { get; set; }
        public required string EmergencyContactName { get; set; }
        public required string EmergencyContactNumber { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastUpdatedOn { get; set; }
        public bool IsActive { get; set; }
    }
}
