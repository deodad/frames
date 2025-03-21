import type { RpcRequest, RpcResponse, RpcSchema } from 'ox'
import type { Ready } from './actions'
import type { FrameContext } from './context'
import { openUrl } from './actions/OpenUrl'

export type Schema = RpcSchema.From<
  | {
      Request: {
        method: 'app_context'
        params?: undefined
      }
      ReturnType: FrameContext
    }
  | {
      Request: {
        method: 'app_ready'
        params?: Ready.ReadyOptions
      }
      ReturnType: undefined
    }
  | {
      Request: {
        method: 'app_open_url'
        params?: openUrl.Options
      }
      ReturnType: undefined
    }
>

export type Request = RpcRequest.RpcRequest<Schema>
export type Response = RpcResponse.RpcResponse<Schema>

export type RequestFn = <
  methodName extends RpcSchema.MethodNameGeneric<Schema>,
>(
  parameters: RpcSchema.ExtractRequest<Schema, methodName>,
) => Promise<
  RpcResponse.RpcResponse<RpcSchema.ExtractReturnType<Schema, methodName>>
>

export type Transport = {
  request: RequestFn
}

export type RequestHandler = (request: Request) => Promise<Response>
