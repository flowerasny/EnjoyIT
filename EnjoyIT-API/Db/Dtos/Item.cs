﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Db.Dtos
{
    [Table("Items")]
    public class Item
    {
        [Key]
        public int Id { get; set; }
        public string title { get; set; }
        public string orginator { get; set; }
        public string description { get; set; }
        public string githubPage { get; set; }
        public string solutionPage { get; set; }
        public byte status { get; set; }
        public int rate { get; set; }
    }
}
