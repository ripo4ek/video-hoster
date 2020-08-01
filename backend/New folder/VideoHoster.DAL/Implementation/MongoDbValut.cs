using System;
using System.Collections.Generic;
using VideoHoster.DAL.Interface;
using VideoHoster.Domain;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.GridFS;
using MongoDB.Driver.Linq;
using System.Linq;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Bson.Serialization.Serializers;
using VideoHoster.DAL.DbEntities;
using VideoHoster.Domain.Base;
using TitleBase = VideoHoster.Domain.TitleBase;


namespace VideoHoster.DAL.Implementation
{
    
    //TODO: Создавать дб сущности при поомщи рефлекии а не вручную
    public class MongoDbValut : IValut
    {
        private DbConfig _dbConfig;
        private IMongoDatabase _database;
        public MongoDbValut()
        {
            _dbConfig = new DbConfig();

            string connectionString = _dbConfig.GetConnectionString();
            string databaseName = _dbConfig.GetDatabaseName();

            _database = new MongoClient(connectionString)
                .GetDatabase(databaseName);



            
            var conventionPack = new ConventionPack {new CamelCaseElementNameConvention()}; 
            ConventionRegistry.Register("camelCase", conventionPack, t => true);
            
            BsonClassMap.RegisterClassMap<BaseEntity>(cm =>
            {
                cm.AutoMap();
                cm.IdMemberMap.SetSerializer(new StringSerializer(BsonType.ObjectId));
            });
            BsonClassMap.RegisterClassMap<NamedEntity>();
            BsonClassMap.RegisterClassMap<TitleBase>(cm =>
            {
                cm.AutoMap();
                cm.UnmapField(f=>f.Generes);
            });
            
            


            
            

            
            
        }

        public TitleTree GetTitleTree(string id)
        {
            throw new NotImplementedException();
        }

        public void AddTitle(TitleBase titleBase)
        {

            throw new NotImplementedException();
            
        }

        public void AddTitleTree(TitleTree titleTree)
        {
            throw new NotImplementedException();
        }

        public TItleDetails GetTitleDetails(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TItleDetails> GetTitleDetails()
        {
            throw new NotImplementedException();
        }

        public void DeleteTitleDetails(string id)
        {
            throw new NotImplementedException();
        }

        public void UpdateTitleDetails(TItleDetails titleDetails)
        {
            throw new NotImplementedException();
        }

        public void DeleteTitle(string id)
        {
            throw new NotImplementedException();
        }

        public void DeleteTitleTree(string id)
        {
            var collection = _database.GetCollection<TitleTree>(DbNamings.TitleTrees);
            var filter = Builders<TitleTree>.Filter.Eq("Id", id);
            collection.DeleteOne(filter);
        }

        public TitleBase GetTitle(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TitleBase> GetTitles()
        {
            
            var collection = _database.GetCollection<TitleBase>(DbNamings.TitleBase);
            
            
            var titles = collection.Find(new BsonDocument()).ToList();

            foreach (var title in titles)
            {
                title.Generes = new List<Genere>();
                foreach (var ids in title.GenereIds)
                {
                    title.Generes.Add(GetGenere(ids));
                }
            }
           
            return titles;
        }

        public TitleTree GetTitleTree(int id)
        {
            var collection = _database.GetCollection<TitleTree>(DbNamings.TitleTrees);

           return null;
        }

        public IEnumerable<TitleTree> GetTitleTrees()
        {
            var collection = _database.GetCollection<TitleTree>(DbNamings.TitleTrees);
            return collection.Find(new BsonDocument()).ToList();
        }

        public void UpdateTitle(TitleBase titleBase)
        {
            DeleteTitle(titleBase.Id);
            AddTitle(titleBase);
        }

        public void UpdateTitleTree(TitleTree titleTree)
        {
            DeleteTitleTree(titleTree.Id);
            AddTitleTree(titleTree);
        }

        public IEnumerable<Genere> GetGeneres()
        {
            var collection = _database.GetCollection<Genere>(DbNamings.Genres);
            return collection.Find(new BsonDocument()).ToList();
        }
        public Genere GetGenere(string id)
        {
            var collection = _database.GetCollection<Genere>(DbNamings.Genres);
            return collection.AsQueryable().First(c=>c.Id == id);
        }
    }
    
}
