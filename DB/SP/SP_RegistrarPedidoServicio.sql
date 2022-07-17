USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[registrarPedidoServicio]    Script Date: 7/17/2022 1:06:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento para el registro de Pedidos de Servicios
-- =============================================
create PROCEDURE [dbo].[registrarPedidoServicio](
	  @NumeroDeOrden int 
	 ,@NumeroDeTarjeta as VARCHAR(50)
	 ,@CodigoDeSeguridad as VARCHAR(4)
	 ,@FechaExpiracion as VARCHAR(50)
	 ,@Lugar as VARCHAR(100)
	 ,@Total as decimal
	 ,@Servicio as int
	 ,@Cliente as int
	 ,@Horario as VARCHAR(50)
	 ,@resultado int OUTPUT
)      
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION registrarPedidoServicio;
	BEGIN TRY
			BEGIN
			SET IDENTITY_INSERT [dbo].[PedidoServicio] ON;
			INSERT INTO [dbo].[PedidoServicio]
					   ([NumeroDeOrden]
					   ,[NumeroDeTarjeta]
					   ,[CodigoDeSeguridad]
					   ,[FechaExpiracion]
					   ,[Lugar]
					   ,[total]
					   ,[Servicio]
					   ,[Cliente]
					   ,[Horario])
				 VALUES
					   (@NumeroDeOrden
					   ,@NumeroDeTarjeta
					   ,@CodigoDeSeguridad
					   ,@FechaExpiracion
					   ,@Lugar
					   ,@Total
					   ,@Servicio
					   ,@Cliente
					   ,@Horario)
			END
			SET IDENTITY_INSERT [dbo].[PedidoServicio] OFF;
		COMMIT TRANSACTION registrarPedidoServicio;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = 1
	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION registrarPedidoServicio;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos del Pedido de Productos, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END