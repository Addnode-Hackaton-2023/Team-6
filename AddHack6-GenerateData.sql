

declare @date datetime,@starttime datetime, @eta datetime, @endtime datetime,
@receiverId int = 2, @driveId int, @GiverId int, @PickUpTime datetime, @weight float,@TotalNumberOfPickUps int = 25,
@startdate date = '2015-01-01',
@enddate date = '2022-12-31'


set @date = @startdate;

while (@date <= @enddate)
begin
  if (DATENAME(WEEKDAY, @date) != 'Saturday' and DATENAME(WEEKDAY, @date) != 'Sunday')
  begin

    set @starttime = dateadd(hh, 9, @date);
	set @eta = dateadd(hh, 13, @date);
	set @endtime = dateadd(hh, 14, @date);

    insert Drive(StartTime, EstimatedDeliveryTime,EndTime, ReceiverId, TotalNumberOfPickUps)
	 values (@starttime, @eta, @endtime, @receiverId, @TotalNumberOfPickUps);

    set @driveId = @@identity;

	set @GiverId = 7;
	set @PickupTime = @starttime;

	while(@GiverId <= 23)
	begin

	  set @PickupTime = dateadd(mi, 13, @PickupTime);
	  set @weight = floor(rand()*50) + (Select floor(rand()*101)) + (Select floor(rand()*101)) + 0.5;


	  insert Pickup(DriveId, GiverId, PickUpTime, Weight)
	    values(@driveId, @GiverId, @PickupTime, @Weight);

      set @GiverId = @GiverId +1;

	end

  end
  --else
  --begin
  --  print @date + ' is weekend'
  --end

  set @date = dateadd(day, 1, @date)

end
