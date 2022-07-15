USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[registrarCliente]    Script Date: 7/14/2022 3:13:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento para el registro de Clientes
-- =============================================
CREATE PROCEDURE [dbo].[registrarCliente](
	  @ClienteID as INT
	 ,@Cedula as VARCHAR(20)
	 ,@Nombre as VARCHAR(50)
	 ,@Apellido as VARCHAR(50)
	 ,@FechaNacimiento as VARCHAR(50)
	 ,@Correo as VARCHAR(100)
	 ,@Telefono as VARCHAR(50)
	 ,@Movil as VARCHAR(50)
	 ,@Provincia as VARCHAR(50)
	 ,@Ciudad as VARCHAR(50)
	 ,@Calle as VARCHAR(50)
	 ,@NumeroCasa as VARCHAR(50)
	 ,@resultado int OUTPUT
)      
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION registrarCliente;
	BEGIN TRY
		IF (@ClienteID > 0)
			BEGIN
				UPDATE [dbo].[Cliente]
					SET  Cedula = @Cedula
						,Nombre = @Nombre
						,Apellido = @Apellido
						,FechaNacimiento = @FechaNacimiento
						,Correo = @Correo
						,Telefono = @Telefono
						,Movil = @Movil
						,Provincia = @Provincia
						,Ciudad = @Ciudad
						,Calle = @Calle
						,NumeroCasa = @NumeroCasa
				 WHERE ClienteID = @ClienteID;
			END
		ELSE
			BEGIN
			INSERT INTO [dbo].[Cliente]
					   ([Cedula]
					   ,[Nombre]
					   ,[Apellido]
					   ,[FechaNacimiento]
					   ,[Correo]
					   ,[Telefono]
					   ,[Movil]
					   ,[Provincia]
					   ,[Ciudad]
					   ,[Calle]
					   ,[NumeroCasa])
				 VALUES
					   (@Cedula
					   ,@Nombre
					   ,@Apellido
					   ,@FechaNacimiento
					   ,@Correo
					   ,@Telefono
					   ,@Movil
					   ,@Provincia
					   ,@Ciudad
					   ,@Calle
					   ,@NumeroCasa)
			END

		COMMIT TRANSACTION registrarCliente;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = @ClienteID
	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION registrarCliente;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos del Cliente, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END