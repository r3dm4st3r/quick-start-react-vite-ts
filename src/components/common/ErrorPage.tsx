import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="mx-auto max-w-[550px] p-10 bg-white shadow drop-shadow-sm">
        <div className="text-center">
          <span className="text-6xl flex justify-center mb-3">
            <Icon icon="clarity:error-standard-line" />
          </span>
          <h1>Nothing is here!</h1>
          <p className="my-4 text-lg">This page has been shown to you purposely</p>
          <button
            type="button"
            className="bg-theme text-white font-bold px-6 py-2 rounded"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
