USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[ActualizarServicio]    Script Date: 7/18/2022 12:00:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento Actualizar Servicio
-- =============================================
CREATE PROCEDURE [dbo].[ActualizarServicio](
	  @ServicioID as INT
	 ,@Nombre as Varchar(50)
	 ,@Descripcion as Varchar(max)
	 ,@Precio as decimal
	 ,@resultado int OUTPUT
)      
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION ActualizarServicio;
	BEGIN TRY
		
		UPDATE [dbo].[Servicio] SET Nombre = @Nombre, Descripcion = @Descripcion, Precio = @Precio WHERE ServicioID = @ServicioID;

		COMMIT TRANSACTION ActualizarServicio;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = @ServicioID


	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION ActualizarServicio;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos del Servicio, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END