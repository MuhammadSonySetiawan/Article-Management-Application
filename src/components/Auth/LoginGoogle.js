import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginGoogle() {  
  return (
            <div>
              <Link href="/api/auth/signin">
                <button
                  className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                  type="button"
                >
                  <FontAwesomeIcon icon={faGoogle} className=" size-6 mr-2" />
                  Login via Google
                </button>
              </Link>
            </div>
  );
}

export default LoginGoogle;
