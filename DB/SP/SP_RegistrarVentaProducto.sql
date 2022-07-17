USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[registrarVentaProducto]    Script Date: 7/16/2022 9:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento para el registro de Ventas de Productos
-- =============================================
Create PROCEDURE [dbo].[registrarVentaProducto](
	  @VentaID as INT
	 ,@ProductoID as INT
	 ,@Cantidad INT
	 ,@resultado int OUTPUT
)      
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION registrarVentaProducto;
	BEGIN TRY
			BEGIN
			SET IDENTITY_INSERT [dbo].[VentaProducto] ON;
			INSERT INTO [dbo].[VentaProducto]
					   ([VentaID]
					   ,[ProductoID]
					   ,[cantidad])
				 VALUES
					   (@VentaID
					   ,@ProductoID
					   ,@Cantidad)

			SET IDENTITY_INSERT [dbo].[VentaProducto] OFF;
			END

		COMMIT TRANSACTION registrarVentaProducto;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = @VentaID
	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION registrarVentaProducto;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos de la Cuenta, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END