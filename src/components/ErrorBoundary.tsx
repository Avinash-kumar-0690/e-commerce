// src/components/ErrorBoundary.tsx
import{ Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error)
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(`ErrorBoundary caught an error, ${error}, ${errorInfo}`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center text-red-600">
          Something went wrong. Please try again later.
        </div>
      );
    }

    return this.props.children;
  }
}