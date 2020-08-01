#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["video-hoster/video-hoster.csproj", "video-hoster/"]
RUN dotnet restore "video-hoster/video-hoster.csproj"
COPY . .
WORKDIR "/src/video-hoster"
RUN dotnet build "video-hoster.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "video-hoster.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "video-hoster.dll"]