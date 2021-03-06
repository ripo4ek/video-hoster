﻿using System;
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
                cm.MapIdField(x => x.Id)
                    .SetSerializer(new StringSerializer(BsonType.ObjectId))
                    .SetIgnoreIfDefault(true);
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

        public TitleType GetTitleType(string id)
        {
            var collection = _database.GetCollection<TitleType>(DbNamings.Types);
            return collection.AsQueryable().First(c=>c.Id == id);
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
            /*var collection = _database.GetCollection<TitleTree>(DbNamings.TitleTrees);
            var filter = Builders<TitleTree>.Filter.Eq("Id", id);
            collection.DeleteOne(filter);*/
        }

        public TitleBase GetTitle(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TitleBase> GetTitles()
        {
            
            var collection = _database.GetCollection<TitleBase>(DbNamings.TitleBases);
            
            
            var titles = collection.Find(new BsonDocument()).ToList();

            /*foreach (var title in titles)
            {
                if (title.GenereIds != null)
                {
                    title.Generes = new List<Genere>();
                    foreach (var ids in title.GenereIds)
                    {
                        title.Generes.Add(GetGenere(ids));
                    }
                }

                if (title.StatusId != null)
                    title.Status = GetTitleStatus(title.StatusId);
                if (title.TitleTypeId != null)
                    title.TitleType = GetTitleType(title.TitleTypeId);

            }*/
            return titles;
        }

        public void PushForTest()
        {
              /*var collection = _database.GetCollection<TitleBase>(DbNamings.TitleBases);
              
              var element = new TitleBase()
              {
                  Name = "TestInsert",
                  PosterUrl = "testInsert.jpg",
                  TreeId = 12,
                  UserRating = 10.0,
                  TitleDetailsId = 223,
                  GenereIds = new []{ "asdf1" },
                  StatusId = "qwerty1",
                  TitleTypeId = "zxcv1",
                  ReleaseDateRange = new DateRange()
                  {
                      From = new DateTime(2012,05,6,12,12,12),
                      To = new DateTime(2012,05,13,12,12,12),
                  }

              };
              var element2 = new TitleBase()
              {
                  Name = "AAATestInsert",
                  PosterUrl = "testInsert.jpg",
                  TreeId = 12,
                  UserRating = 10.0,
                  TitleDetailsId = 223,
                  StatusId = "qwerty1",
                  TitleTypeId = "zxcv1",
                  ReleaseDateRange = new DateRange()
                  {
                      From = new DateTime(1999,05,6,12,12,12),
                      To = new DateTime(2001,05,13,12,12,12),
                  }

              };
              collection.InsertOne(element);
              collection.InsertOne(element2);*/
            
            /*
            var collection2 = _database.GetCollection<TitleType>(DbNamings.Types);
            var type = new TitleType()
            {
                Name = "ova"
            };
            collection2.InsertOne(type);
            
            var collection23 = _database.GetCollection<Status>(DbNamings.Statuses);
            var status = new Status()
            {
                Name = "Finished"
            };
            collection23.InsertOne(status);*/
            var collection = _database.GetCollection<TitleBase>(DbNamings.TitleBases);
            
            var collection2 = _database.GetCollection<Genere>(DbNamings.Genres);

            var  generes  = collection2.Find(new BsonDocument()).ToList();
            
            var collection3 = _database.GetCollection<Status>(DbNamings.Statuses);
            
            var status = collection3.Find(new BsonDocument()).ToList();
            
            var collection4 = _database.GetCollection<TitleType>(DbNamings.Types);
            
            var types = collection4.Find(new BsonDocument()).ToList();
            
            var element = new TitleBase()
            {
                Name = "TestInsert",
                PosterUrl = "testInsert.jpg",
                TreeId = 12,
                UserRating = 10.0,
                TitleDetailsId = 223,
                Generes = generes,
                Status =  status[0],
                TitleType = types[0],
                Description = "testDescription",
                LastUpdated = new DateTime(2012,05,6,12,12,12),
                AddedOnSite = new DateTime(2012,05,6,12,12,12),
                EpisodeReleaseTime = new DateTime(2012,05,6,12,12,12),
                LastReleasedEpisodeNumber = 12,
                ReleaseDateRange = new DateRange()
                {
                    From = new DateTime(2012,05,6,12,12,12),
                    To = new DateTime(2012,05,13,12,12,12),
                }
                
            };
            var element2 = new TitleBase()
            {
                Name = "AAAATestInsert",
                PosterUrl = "testInsert.jpg",
                TreeId = 12,
                UserRating = 10.0,
                TitleDetailsId = 223,
                Generes = generes,
                Status =  status[0],
                TitleType = types[0],
                Description = "testDescription",
                LastUpdated = new DateTime(2012,05,4,12,12,12),
                AddedOnSite = new DateTime(2012,05,6,12,12,12),
                EpisodeReleaseTime = new DateTime(2012,05,4,12,12,12),
                LastReleasedEpisodeNumber = 12,
                ReleaseDateRange = new DateRange()
                {
                    From = new DateTime(2012,05,6,12,12,12),
                    To = new DateTime(2012,05,13,12,12,12),
                }
                
            };
            collection.InsertOne(element);
            collection.InsertOne(element2);
        }
        public TitleTree GetTitleTree(int id)
        {
            //var collection = _database.GetCollection<TitleTree>(DbNamings.TitleTrees);

           return null;
        }

        public IEnumerable<TitleTree> GetTitleTrees()
        {
            //var collection = _database.GetCollection<TitleTree>(DbNamings.TitleTrees);
            return null;
        }

        public void UpdateTitle(TitleBase titleBase)
        {
            DeleteTitle(titleBase.Id);
            AddTitle(titleBase);
        }

        public void UpdateTitleTree(TitleTree titleTree)
        {
            
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

        public Status GetTitleStatus(string id)
        {
            var collection = _database.GetCollection<Status>(DbNamings.Statuses);
            return collection.AsQueryable().First(c=>c.Id == id);
        }
    }
    
}
