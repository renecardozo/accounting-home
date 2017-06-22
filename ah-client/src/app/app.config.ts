const settings: any = {
    host: 'localhost',
    protocol: 'http',
    port: '3001',
    middlewares: {
        rubros: 'api_rubro/rubro',
        gastos: 'api_gasto/gasto',
        ingresos: 'api_ingreso/ingreso'
    }
}
export const Settings = settings;