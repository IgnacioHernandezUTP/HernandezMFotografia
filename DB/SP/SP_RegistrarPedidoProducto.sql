USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[registrarPedidoProducto]    Script Date: 7/16/2022 8:33:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento para el registro de Pedidos de Productos
-- =============================================
CREATE PROCEDURE [dbo].[registrarPedidoProducto](

	  @NumeroDeTarjeta as VARCHAR(50)
	 ,@CodigoDeSeguridad as VARCHAR(4)
	 ,@FechaExpiracion as VARCHAR(50)
	 ,@TipoEntrega as VARCHAR(50)
	 ,@Ubicacion as VARCHAR(100)
	 ,@Total as decimal
	 ,@Venta as int
	 ,@Cliente as int
	 ,@resultado int OUTPUT
)      
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION registrarPedidoProducto;
	BEGIN TRY
			BEGIN
			INSERT INTO [dbo].[PedidoProducto]
					   ([NumeroDeTarjeta]
					   ,[CodigoDeSeguridad]
					   ,[FechaExpiracion]
					   ,[TipoEntrega]
					   ,[Ubicacion]
					   ,[total]
					   ,[Venta]
					   ,[Cliente])
				 VALUES
					   (@NumeroDeTarjeta
					   ,@CodigoDeSeguridad
					   ,@FechaExpiracion
					   ,@TipoEntrega
					   ,@Ubicacion
					   ,@Total
					   ,@Venta
					   ,@Cliente)
			END

		COMMIT TRANSACTION registrarPedidoProducto;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = 1
	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION registrarPedidoProducto;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos del Pedido de Productos, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END