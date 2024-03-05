type SuccessResponseType = {
  status: number;
  message: string;
  data: any;
};

type ErrorResponseType = {
  status: number;
  message: string;
  error: any;
};

export function SuccessResponse({
  status,
  message,
  data,
}: SuccessResponseType) {
  return { status, message, data, ok: true };
}

export function ErrorResponse({ status, message, error }: ErrorResponseType) {
  return { status, message, error, ok: false };
}
