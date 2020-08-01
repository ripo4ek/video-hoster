using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace VideoHoster.DAL
{
    //TODO: сделать возможность выбора строки подключения и базы данных
    public class DbConfig
    {
        static public IConfigurationRoot Configuration { get; set; }

        public  string GetConnectionString()
        {
            var builder = new ConfigurationBuilder()
           .SetBasePath(Directory.GetCurrentDirectory())
           .AddJsonFile("appsettings.json");
            var test = Directory.GetCurrentDirectory().ToString();
            Configuration = builder.Build();

            return Configuration.GetConnectionString("DefaultConnection");
        }
        public string GetDatabaseName()
        {
            var t = Configuration["Databases:Main"];
            return Configuration["Databases:Main"];
        }
    }
}
