from abc import ABC, abstractmethod
from typing import Dict, Any

class BaseAgent(ABC):
    """Base class for all AI agents"""
    
    @abstractmethod
    def process_request(self, request: Dict[str, Any]) -> Dict[str, Any]:
        """Process a request and return a response"""
        pass
    
    @abstractmethod
    def get_capabilities(self) -> Dict[str, Any]:
        """Return the agent's capabilities"""
        pass
    
    @abstractmethod
    def validate_request(self, request: Dict[str, Any]) -> bool:
        """Validate if the request can be processed by this agent"""
        pass
