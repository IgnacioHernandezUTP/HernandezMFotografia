USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[ActualizarInventario]    Script Date: 7/17/2022 7:51:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento Actualizar Inventario
-- =============================================
CREATE PROCEDURE [dbo].[ActualizarInventario](
	  @ProductoID as INT
	 ,@inventario as INT
	 ,@resultado int OUTPUT
)      
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION ActualizarInventario;
	BEGIN TRY
		
		UPDATE [dbo].[Producto] SET inventario = @inventario WHERE ProductoID = @ProductoID;

		COMMIT TRANSACTION ActualizarInventario;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = @ProductoID


	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION ActualizarInventario;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos de la Cuenta, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END