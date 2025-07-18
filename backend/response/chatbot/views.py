from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from openai import OpenAI
from django.conf import settings
from django.shortcuts import render

client = OpenAI(api_key=settings.OPENAI_API_KEY)

@api_view(['POST'])
@permission_classes([AllowAny])  # Optional: allows access without authentication
def chat_view(request):
    user_message = request.data.get('message', '')
    if not user_message:
        return Response({'error': 'Message field is required.'}, status=400)

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message},
            ],
            max_tokens=150
        )
        ai_message = response.choices[0].message.content
        return Response({'message': ai_message})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
    
    return render(request, 'chats/chats.html')
