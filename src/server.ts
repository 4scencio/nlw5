import { http } from './http'
import './websockets/client'

http.listen(3000, () => console.log('🚀 O servidor está rodando na porta 3000'))