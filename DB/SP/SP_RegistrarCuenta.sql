USE [HernandezM]
GO
/****** Object:  StoredProcedure [dbo].[registrarCuenta]    Script Date: 7/14/2022 3:13:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ignacio Hernandez
-- Create date: 05/06/2022
-- Description:	Procedimiento para el registro de Cuentas
-- =============================================
Create PROCEDURE [dbo].[registrarCuenta](
	  @ClienteID as INT
	 ,@Password as VARCHAR(100)
	 ,@Username as VARCHAR(50)
	 ,@TipoDeCuenta as VARCHAR(50)
	 ,@resultado int OUTPUT
)      
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION registrarCuenta;
	BEGIN TRY
		IF (@resultado > 0)
			BEGIN
				UPDATE [dbo].[CuentaLogin]
					SET  [ClienteID] = @ClienteID
						,[Password] = @Password
						,[Username] = @Username
						,[TipoDeCuenta] = @TipoDeCuenta
				 WHERE ClienteID = @ClienteID;
			END
		ELSE
			BEGIN
			INSERT INTO [dbo].[CuentaLogin]
					   ([Username]
					   ,[Password]
					   ,[TipoDeCuenta]
					   ,[ClienteID])
				 VALUES
					   (@Username
					   ,@Password
					   ,@TipoDeCuenta
					   ,@ClienteID)
			END

		COMMIT TRANSACTION registrarCuenta;
	
		IF (@@IDENTITY IS NOT NULL)
			SET @resultado = @@IDENTITY
		ELSE	
			SET @resultado = @ClienteID
	END TRY

	BEGIN CATCH
		ROLLBACK TRANSACTION registrarCliente;
		
		DECLARE @ErrorMessage NVARCHAR(4000) = 'Error registrando los datos de la Cuenta, line [' + CONVERT(VARCHAR(5), ERROR_LINE()) + ']: ' + ERROR_MESSAGE();
		DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
		DECLARE @ErrorState INT = CASE ERROR_STATE() WHEN 0 THEN 1 ELSE ERROR_STATE() END;
		RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)

		SET @resultado = 0
	END CATCH;
END