# UserService & UsersWeb

## Installation

### UserService

Add new application in IIS and confugure on folder UserService

Define connection string in web.config:
  ```bash
  <connectionStrings>
    <add name="DefaultConnection" providerName="System.Data.SqlClient" connectionString="data source=<DB Server>;initial catalog=<DB Name>;persist security info=True;user id=<db user>;password=<password>;MultipleActiveResultSets=True;" />
  </connectionStrings>
  ```

Service will create or update defined database on first run.

### UsersWeb

Add new application in IIS and confugure on folder UsersWeb

Define UserService URL in /app/settings.json
```bash
{
	"usersApiUrl":  "http://<UserServicePath>/api/"
}
```

