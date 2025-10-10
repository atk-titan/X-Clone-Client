import GoogleAuthButton from "../GoogleAuthButton";

const SinginContent = () => {
  return (
    <div>
      <h4 className="mb-2 text-xl font-bold">New to X?</h4>
      <p className="mb-3 text-sm font-extralight text-gray-400">
        Sign up now to get your own personalized timeline!
      </p>
      <div className="flex w-full justify-center">
        <GoogleAuthButton />
      </div>
      <p className="mt-3 text-sm font-extralight text-gray-400">
        By signing up, you agree to the
        <span className="mx-1 text-blue-400 hover:cursor-pointer hover:underline">
          Terms of Service
        </span>
        and
        <span className="mx-1 text-blue-400 hover:cursor-pointer hover:underline">
          Privacy Policy
        </span>
        , including
        <span className="mx-1 text-blue-400 hover:cursor-pointer hover:underline">
          Cookie Use
        </span>
        .
      </p>
    </div>
  );
};

export default SinginContent;
