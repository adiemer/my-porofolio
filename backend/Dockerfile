FROM python:3.11-slim

WORKDIR /app

# Copy only requirements first for caching
COPY backend/requirements.txt /app/requirements.txt

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy the rest of the backend code
COPY backend/ /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]