USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[ActualizarProducto]    Script Date: 7/18/2022 12:00:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento Actualizar Producto
-- =============================================
CREATE PROCEDURE [dbo].[ActualizarProducto](
	  @ProductoID as INT
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

	BEGIN TRANSACTION ActualizarProducto;
	BEGIN TRY
		
		UPDATE [dbo].[Producto] SET Nombre = @Nombre, Descripcion = @Descripcion, Precio = @Precio WHERE ProductoID = @ProductoID;

		COMMIT TRANSACTION ActualizarProducto;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = @ProductoID


	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION ActualizarProducto;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos de la Cuenta, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END