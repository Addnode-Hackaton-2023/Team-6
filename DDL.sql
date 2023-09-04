-- DROP SCHEMA dbo;

CREATE SCHEMA dbo;
-- [add-hack-6].dbo.City definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.City;

CREATE TABLE [add-hack-6].dbo.City (
	Id int NOT NULL,
	City nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK_City PRIMARY KEY (Id)
);


-- [add-hack-6].dbo.Company definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.Company;

CREATE TABLE [add-hack-6].dbo.Company (
	Id int IDENTITY(1,1) NOT NULL,
	Name nvarchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK_Company PRIMARY KEY (Id)
);


-- [add-hack-6].dbo.sysdiagrams definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.sysdiagrams;

CREATE TABLE [add-hack-6].dbo.sysdiagrams (
	name sysname COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	principal_id int NOT NULL,
	diagram_id int IDENTITY(1,1) NOT NULL,
	version int NULL,
	definition varbinary(MAX) NULL,
	CONSTRAINT PK__sysdiagr__C2B05B616689D472 PRIMARY KEY (diagram_id),
	CONSTRAINT UK_principal_name UNIQUE (principal_id,name)
);


-- [add-hack-6].dbo.Giver definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.Giver;

CREATE TABLE [add-hack-6].dbo.Giver (
	Id int IDENTITY(1,1) NOT NULL,
	Name nvarchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CompanyId int NULL,
	Address nvarchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CityId int NULL,
	CONSTRAINT PK_Giver PRIMARY KEY (Id),
	CONSTRAINT FK_Giver_City FOREIGN KEY (CityId) REFERENCES [add-hack-6].dbo.City(Id),
	CONSTRAINT FK_Giver_Company FOREIGN KEY (CompanyId) REFERENCES [add-hack-6].dbo.Company(Id)
);


-- [add-hack-6].dbo.Receiver definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.Receiver;

CREATE TABLE [add-hack-6].dbo.Receiver (
	Id int IDENTITY(1,1) NOT NULL,
	Name nvarchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CityId int NULL,
	Address nvarchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PK_Receiver PRIMARY KEY (Id),
	CONSTRAINT FK_Receiver_City FOREIGN KEY (CityId) REFERENCES [add-hack-6].dbo.City(Id)
);


-- [add-hack-6].dbo.Drive definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.Drive;

CREATE TABLE [add-hack-6].dbo.Drive (
	Id int IDENTITY(1,1) NOT NULL,
	StartTime datetime NOT NULL,
	EstimatedDeliveryTime datetime NULL,
	EndTime datetime NULL,
	ReceiverId int NOT NULL,
	TotalNumberOfPickUps int DEFAULT 25 NOT NULL,
	CONSTRAINT PK_Drive PRIMARY KEY (Id),
	CONSTRAINT Drive_FK1 FOREIGN KEY (ReceiverId) REFERENCES [add-hack-6].dbo.Receiver(Id),
	CONSTRAINT FK_Drive_Receiver FOREIGN KEY (ReceiverId) REFERENCES [add-hack-6].dbo.Receiver(Id)
);


-- [add-hack-6].dbo.Pickup definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.Pickup;

CREATE TABLE [add-hack-6].dbo.Pickup (
	DriveId int NOT NULL,
	GiverId int NOT NULL,
	PickupTime datetime NOT NULL,
	Weight float NOT NULL,
	CONSTRAINT PK_Pickup PRIMARY KEY (DriveId,GiverId),
	CONSTRAINT FK_Pickup_Drive FOREIGN KEY (DriveId) REFERENCES [add-hack-6].dbo.Drive(Id),
	CONSTRAINT FK_Pickup_Giver FOREIGN KEY (GiverId) REFERENCES [add-hack-6].dbo.Giver(Id),
	CONSTRAINT Pickup_FK1 FOREIGN KEY (DriveId) REFERENCES [add-hack-6].dbo.Drive(Id),
	CONSTRAINT Pickup_FK2 FOREIGN KEY (GiverId) REFERENCES [add-hack-6].dbo.Giver(Id)
);


-- [add-hack-6].dbo.Deviation definition

-- Drop table

-- DROP TABLE [add-hack-6].dbo.Deviation;

CREATE TABLE [add-hack-6].dbo.Deviation (
	Id int NOT NULL,
	[Text] nvarchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	DriveId int NOT NULL,
	CONSTRAINT PK_Deviation PRIMARY KEY (Id),
	CONSTRAINT FK_Deviation_Drive FOREIGN KEY (DriveId) REFERENCES [add-hack-6].dbo.Drive(Id)
);


